'use client'
import { CircleDollarSign, Search, BookHeart, UserCog, PiggyBank, DollarSign, ChartNoAxesCombined } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const Sidebar = ({ name, lastname, login_id }: any) => {

    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        router.push('/');
    };

    return (
        <div className="hidden border-r bg-muted/40 md:block ">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                        <DollarSign className="h-6 w-6" />
                        <span className="">Spendings App</span>                
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                        <Link
                            href={`/user/spendings`}
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <PiggyBank className="h-4 w-4" />
                            Spendings
                        </Link>
                        <Link
                            href={`/user/profile`}
                            className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary "
                        >
                            <UserCog className="h-4 w-4" />
                            My Profile
                        </Link>
                        <Link
                            href={`/user/statistics`}
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary "
                        >
                            <ChartNoAxesCombined className="h-4 w-4" />
                            Statistics
                        </Link>
                    </nav>
                </div>
            <Button onClick={handleLogout} className="w-full mt-4">Log Out</Button> 
            </div>
        </div>
    );
};
export default Sidebar;
