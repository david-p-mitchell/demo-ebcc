// server/api/checkFormId.ts
export default defineEventHandler(async () => {
    const formId = useRuntimeConfig().formspreeFormId;
    
    if (!formId) {
      return { error: 'Missing Formspree ID.' };
    }
    
    return { success: true, formId }; // Optionally return the formId
  });
  