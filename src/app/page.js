import SparklesIcon from "@/components/SparklesIcon";
import DemoSection from "@/components/DemoSection";
import UploadIcon from "@/components/UploadIcon";
import PageHeaders from "@/components/PageHeaders";

export default function Home() {
  return (
    <>
      <PageHeaders
        h1Text={"Add epic captions to your videos."}
        h2Text={"Just upload your video and we'll work our magic!"}
      />
      <div className="text-center">
        <button className="bg-green-600 rounded-full px-4 py-2 inline-flex gap-2 border border-purple-700/50">
          <UploadIcon />
          Choose file
        </button>
      </div>
      <DemoSection />
    </>
  );
}
