import api from '../lib/api'

const loginEndpoint = import.meta.env.VITE_LOGIN_ENDPOINT ?? '/login'
const useMockLogin = import.meta.env.VITE_ENABLE_MOCK_LOGIN === 'true'
const mockEmail = import.meta.env.VITE_MOCK_LOGIN_EMAIL ?? 'admin@laundrypro.id'
const mockPassword = import.meta.env.VITE_MOCK_LOGIN_PASSWORD ?? 'admin123'

function ambilPayloadLogin(data) {
  const token =
    data?.token ??
    data?.accessToken ??
    data?.data?.token ??
    data?.data?.accessToken ??
    data?.result?.token

  const user = data?.user ?? data?.data?.user ?? data?.result?.user ?? null

  return { token, user }
}

function mockLogin({ email, password }) {
  if (email === mockEmail && password === mockPassword) {
    return {
      token: 'mock-token-laundry-admin',
      user: {
        nama: 'Admin Laundry',
        email: mockEmail,
        role: 'admin',
      },
    }
  }

  throw new Error('Email atau password mock tidak sesuai.')
}

export async function loginRequest({ email, password }) {
  try {
    const response = await api.post(loginEndpoint, { email, password })
    const payload = ambilPayloadLogin(response.data)

    if (!payload.token) {
      throw new Error('Token login tidak ditemukan dari respons API.')
    }

    return payload
  } catch (error) {
    // Ketika backend mati / URL salah / CORS, Axios biasanya melempar "Network Error".
    if (useMockLogin && !error.response) {
      return mockLogin({ email, password })
    }

    if (!error.response) {
      throw new Error(
        'Tidak dapat terhubung ke server login. Cek VITE_API_BASE_URL, backend, atau konfigurasi CORS.',
        { cause: error }
      )
    }

    throw error
  }
}
