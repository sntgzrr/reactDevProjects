import { Card, TextInput, Title, Button, Badge } from "@tremor/react";
import { useUserActions } from "../hooks/useUserActions";
import { useState } from "react";

export function CreateNewUser() {

    const { addUser } = useUserActions()
    const [result, setResult] = useState<'ok' | 'ko' | null>(null)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setResult(null)

        const form = event.target as HTMLFormElement
        const formData = new FormData(form)

        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const github = formData.get('github') as string

        if (!name || !email || !github){
            return setResult('ko')
        }

        addUser({ name, email, github })
        setResult('ok')
        form.reset()
    }

    return (
        <Card>
            <Title>Create New User</Title>

            <form onSubmit={handleSubmit}>
                <TextInput name="name" placeholder="Name" />
                <TextInput name="email" placeholder="Email" />
                <TextInput name="github" placeholder="GitHub User" />

                <div>
                    <Button
                        type="submit"
                        style={{ marginTop: '16px' }}>
                        Create User
                    </Button>
                    <span>
                        { result === 'ok' && <Badge color='green'>Saved</Badge> }
                        { result === 'ko' && <Badge color='red'>No Saved</Badge> }
                    </span>
                </div>
            </form>
        </Card>
    )
}
