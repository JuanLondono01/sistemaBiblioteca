// authHelper.ts
export interface FormData {
    user: string;
    password: string;
}

export const loginAdmin = async (formData: FormData): Promise<{ success: boolean; token?: string; error?: string }> => {
    try {
        const response = await fetch('http://localhost:2710/access/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const data = await response.json();
            return { success: true, token: data.token };
        } else if (response.status === 404) {
            return { success: false, error: 'Email not found' };
        } else if (response.status === 401) {
            return { success: false, error: 'Unauthorized' };
        } else {
            return { success: false, error: 'Unexpected error occurred' };
        }
    } catch (error) {
        return { success: false, error: 'Network error' };
    }
};
