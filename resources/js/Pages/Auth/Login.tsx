import { Icons } from "@/shadcn/ui/icons";
import { Button } from "@/shadcn/ui/button";
import { Input } from "@/shadcn/ui/input";
import { Label } from "@/shadcn/ui/label";
import { Checkbox } from "@/shadcn/ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "@/shadcn/ui/alert";

import { RocketIcon } from "@radix-ui/react-icons";

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
        input_type: "",
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
                <>
                    <Alert variant="destructive" className="max-w-72">
                        <RocketIcon />
                        <AlertDescription>{status}</AlertDescription>
                    </Alert>
                </>
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
                            <Label htmlFor="input_type">Username</Label>
                            <Input
                                id="input_type"
                                type="text"
                                name="input_type"
                                value={data.input_type}
                                autoComplete="input_type"
                                placeholder="username"
                                onChange={(e) =>
                                    setData("input_type", e.target.value)
                                }
                                autoFocus
                            />

                            <InputError
                                /* @ts-ignore */
                                message={errors.username}
                                className="mt-2"
                            />
                            
                            <InputError
                                /* @ts-ignore */
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="password">Password</Label>
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
