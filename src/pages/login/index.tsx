export async function getServerSideProps() {
    await new Promise(resolve => {
        setTimeout(resolve, 3000);
    });
    return { props: {}};
}

export default function LoginPage() {
    return <div>Welcome to LoginPage!</div>;
}
