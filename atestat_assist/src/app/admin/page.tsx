'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Sidebar from './SideBar';


const LoginPage = () => {
 

    return (
        <div className="flex min-h-screen">
            <Sidebar/>
            <p>admin page</p>
        </div>
    );
};

export default LoginPage;
