import { QueryClient, useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

import { TypeUserForm } from '@/types/auth.types'

import { userService } from '@/services/user.service'

export function useUpdateSettings() {
	const queryClient = new QueryClient()

	const { mutate, isPending } = useMutation({
		mutationKey: ['update profile'],
		mutationFn: (data: TypeUserForm) => userService.update(data),
		onSuccess() {
			toast.success('Profile updated successfully!')
			queryClient.invalidateQueries({ queryKey: ['profile'] })
		}
	})

	return { mutate, isPending }
}
