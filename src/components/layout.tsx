export default function Layout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className='bg-amber-50 flex'>
            {children}
        </div>
    );
}