import PageHeaders from "@/components/PageHeaders";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="mt-28">
      <PageHeaders
        h1Text={"Check out our Pricing"}
        h2Text={"Our pricing is simple "}
      />
      <div className="flex sm:space-x-4 max-sm:space-y-4 max-sm:flex-col">
        <div className="flex-1 text-xl mt-14 rounded-xl border border-[#4E67E5]/25 bg-[#080C23] p-10 w-full">
          <div className="text-[#4d66e5]">Starter Plan</div>
          <div className="text-6xl my-5 font-light">Free</div>
          <span>Get started with our basic features for free.</span>
          <Link href="/">
            <button className="my-5 w-full text-black p-5 max-sm:p-2 rounded-3xl bg-[#4E67E5] text-xl max-sm:text-lg hover:bg-[#8a9dfc] transition-all">
              Get started
            </button>
          </Link>
          <ul className="text-sm">
            <li>Access to caption generation</li>
            <li>Basic customization options</li>
          </ul>
        </div>
        <div className="flex-1 text-xl mt-14 rounded-xl border border-[#9966FF]/25 bg-[#120d1d] p-10 w-full">
          <div className="text-[#9967FF]">Pro Plan</div>
          <div className="text-6xl my-5 font-light">$1000</div>
          <div>Unlock advanced features with our Pro plan.</div>
          <button className="my-5 w-full text-black p-5 max-sm:p-2 rounded-3xl bg-[#9966FF] text-xl max-sm:text-lg hover:bg-[#BB99FF] transition-all">
            Upgrade to Pro
          </button>
          <ul className="text-sm">
            <li>Enhanced customization options</li>
            <li>Premium support</li>
            <li>Multi-language support</li>
          </ul>
        </div>
        <div className="flex-1 text-xl mt-14 rounded-xl border border-[#F7E16F]/25 bg-[#19170d] p-10 w-full">
          <div className="text-[#F7E16F]">Enterprise Plan</div>
          <div className="text-6xl my-5 font-light">$1800</div>
          <div>For large businesses and custom solutions.</div>
          <Link href="mailto:chiraagbhandakkar@gmail.com">
            <button className="my-5 w-full text-black p-5 max-sm:p-2 rounded-3xl bg-[#F7E16F] text-xl max-sm:text-lg hover:bg-[#fdf2bb] transition-all">
              Contact Sales
            </button>
          </Link>
          <ul className="text-sm">
            <li>Customized solutions</li>
            <li>Scalable infrastructure</li>
            <li>Priority support</li>
            <li>API access</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
