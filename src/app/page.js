import SparklesIcon from "@/components/SparklesIcon";
import DemoSection from "@/components/DemoSection";
import UploadIcon from "@/components/UploadIcon";
import PageHeaders from "@/components/PageHeaders";
import UploadForm from "@/components/UploadForm";

export default function Home() {
  return (
    <>
      <PageHeaders
        h1Text={"Add epic captions to your videos."}
        h2Text={"Just upload your video and we'll work our magic!"}
      />
      <UploadForm />
      <DemoSection />
    </>
  );
}
