import { Icons } from "@/shadcn/ui/icons";
import { Button } from "@/shadcn/ui/button";
import { Input } from "@/shadcn/ui/input";
import { Label } from "@/shadcn/ui/label";
import { Checkbox } from "@/shadcn/ui/checkbox";

import GuestLayout from "@/Layouts/GuestLayout";
import { FormEventHandler } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Login Page" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <div className="grid gap-6">
                <div className="my-1">
                    <h1 className="text-3xl font-semibold">Login</h1>
                    <p className="mt-2 text-xs text-slate-400">
                        Portal Aplikasi Rumah Sakit Soeharto Heerdjan
                    </p>
                </div>

                <form onSubmit={submit}>
                    <div className="grid gap-2">
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="username">username</Label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                autoComplete="username"
                                placeholder="username"
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

                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="password">password</Label>
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                autoComplete="current-password"
                                placeholder="password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        {/* <div className="grid w-full max-w-sm items-center gap-1.5">
                            <label className="flex items-center">
                                <Checkbox
                                    id="remember"
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData("remember", e.target.checked)
                                    }
                                />
                                <span className="text-sm text-muted-foreground">
                                    Remember me
                                </span>
                            </label>
                        </div> */}

                        <div className="flex items-center">
                            {canResetPassword && (
                                <Link
                                    href={route("password.request")}
                                    className="mr-4 text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Forgot your password?
                                </Link>
                            )}

                            <Button
                                disabled={processing}
                                className="bg-blue-400 hover:bg-blue-700 ml-4"
                            >
                                {processing && (
                                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                )}
                                Sign In
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
