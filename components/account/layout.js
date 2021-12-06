import { useRouter } from 'next/router';

export default function Layout({ children }) {
    return (
        <div>
            {children}
        </div>
    );
}