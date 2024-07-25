import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = params.id;
  return {
    title: `Customers`,
    description: 'Edit the details of your invoice',
  };
}
export default function Page() {
    return <p>Customer Page</p>;
  }