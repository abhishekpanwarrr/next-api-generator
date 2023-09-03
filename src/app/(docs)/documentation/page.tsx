import { FC } from "react";
import type { Metadata } from "next";
import LargeHeadering from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import DocumentationTabs from "@/components/DocumentationTabs";
interface DocumentationProps {
    
}
export const metadata: Metadata = {
    title: "API Generator | Documentation",
    description: "API Gengrator app",
};

  
const Documentation: FC<DocumentationProps> = () => {
    return ( <div className="container max-w-7xl mx-auto mt-12">
        <div className="flex flex-col items-center gap-6">
            <LargeHeadering>
                Making a request
            </LargeHeadering>
            <Paragraph>api/v1/similarity</Paragraph>
            <DocumentationTabs />
        </div>
    </div> );
}
 
export default Documentation;