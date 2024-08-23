import { ModeToggle } from "@/shadcn/ui/mode-toggle";
import { Head } from "@inertiajs/react";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <>
            <Head>
                <link rel="icon" type="image/x-icon" href={`/storage/images/favicon-180x180.ico`} />
            </Head>

            <main className="bg-[#26313c] h-screen flex items-center justify-center p-10">
                <div className="grid w-full h-full grid-cols-1 bg-white box-anim md:grid-cols-2">
                    <div className="bg-white flex items-center justify-center flex-col">
                        {children}
                    </div>

                    <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r md:flex">
                        <div className="absolute inset-0 bg-zinc-900" />
                        <div className="relative z-20 flex items-center text-lg font-medium justify-center">
                            <img
                                src={`/storage/images/logo-rssh.svg`}
                                className="w-60"
                            />
                        </div>
                        <div className="relative z-20 mt-auto">
                            <blockquote className="space-y-2">
                                <p className="text-lg">
                                    &ldquo;Jl. Prof. Dr. Latumeten No.1,
                                    RT.1/RW.4, Jelambar, Kec. Grogol petamburan,
                                    Kota Jakarta Barat, Daerah Khusus Ibukota
                                    Jakarta 11460.&rdquo;
                                </p>
                                <footer className="text-sm">
                                &#169;SIMRS - Sistem Informasi Manajamen Rumah
                                    Sakit
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
