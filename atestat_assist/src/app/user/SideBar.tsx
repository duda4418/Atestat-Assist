'use client';

import { Search } from 'lucide-react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';

const SearchBar = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [searchValue, setSearchValue] = useState(searchParams.get('title') || '');
        
    const handleSearchTitle = useDebouncedCallback((title: string) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (title) {
            params.set('title', title);
            params.set('display', 'true')
        } else {
            params.delete('title');
            params.set('display', 'false')
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <div className="flex-1 relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
                type="search"
                className="w-full appearance-none bg-background pl-8 shadow-none"
                placeholder="Cauta titlu"
                    onChange={(e) => {
                        handleSearchTitle(e.target.value);
                    }}
                defaultValue={searchValue}
            />
        </div>
    );
}

export default SearchBar;
