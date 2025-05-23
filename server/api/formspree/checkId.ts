// server/api/checkFormId.ts
export default defineEventHandler(async () => {
    const formId = useRuntimeConfig().formspreeFormId;
    
    if (!formId || formId == null) {
      return { success: false, error: 'Missing Formspree ID.' };
    }
    
    return { success: true };
  });
  