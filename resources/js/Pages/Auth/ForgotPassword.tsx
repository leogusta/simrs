import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { Label } from "@/shadcn/ui/label";
import { Input } from "@/shadcn/ui/input";
import { Button } from "@/shadcn/ui/button";
import { Icons } from "@/shadcn/ui/icons";

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div className="grid gap-6">
                    <div className="my-1">
                        <h1 className="text-3xl font-semibold">
                            Forgot Password
                        </h1>
                        <p className="mt-2 text-xs text-slate-400 max-w-96">
                            Forgot your password? No problem. Just let us know
                            your email address and we will email you a password
                            reset link that will allow you to choose a new one.
                        </p>
                    </div>

                    <div className="grid gap-2">
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                placeholder="name@email.com"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                autoFocus
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex items-center justify-end">
                            <Button
                                disabled={processing}
                                className="bg-blue-400 hover:bg-blue-700 ml-4"
                            >
                                {processing && (
                                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                )}
                                Email Password Reset Link
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </GuestLayout>
    );
}
