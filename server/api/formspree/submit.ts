// server/api/formspree.ts
export default defineEventHandler(async (event) => {
  const body = await readBody<{ name: string; email: string; message: string }>(event)

  const formId = useRuntimeConfig().formspreeFormId;
  if (!formId) {
    return { error: 'Missing Formspree ID.' }
  }

  const formData = new URLSearchParams({
    name: body.name,
    email: body.email,
    message: body.message,
  })

  try {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    })

    const result = await response.json()

    if (!response.ok) {
      throw new Error(result?.message || 'Form submission failed')
    }

    return { success: true }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return { error: message }
  }
})
