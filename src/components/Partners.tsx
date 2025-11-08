
import React from 'react';

const PartnerLogo = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`h-8 text-gray-500 flex items-center justify-center ${className}`}>
    {children}
  </div>
);

const GoogleLogo = () => <PartnerLogo> <svg className="h-6" viewBox="0 0 18 18" fill="currentColor"><path d="M17.64 9.20455C17.64 8.56682 17.5827 7.95273 17.4764 7.36364H9V10.845H13.8436C13.635 11.9705 13.0009 12.9232 12.0477 13.5614V15.8195H14.9564C16.6582 14.2527 17.64 11.9459 17.64 9.20455Z"></path><path d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5614C11.2418 14.1232 10.2109 14.4205 9 14.4205C6.65591 14.4205 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9873 5.48182 18 9 18Z"></path><path d="M3.96409 10.71C3.78409 10.1736 3.68182 9.59364 3.68182 9C3.68182 8.40636 3.78409 7.82636 3.96409 7.29H0.957275C0.347727 8.46318 0 10.1368 0 12C0 13.8632 0.347727 15.5368 0.957275 16.71L3.96409 14.29Z" transform="translate(0 -4)"></path><path d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01273 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z"></path></svg></PartnerLogo>;
const TwilioLogo = () => <PartnerLogo><svg className="h-6" viewBox="0 0 92 36" fill="currentColor"><path d="M45.83 20.71a4.4 4.4 0 11-8.8 0 4.4 4.4 0 018.8 0zm-13.2-4.4a4.4 4.4 0 100 8.8 4.4 4.4 0 000-8.8zm-8.8 0a4.4 4.4 0 100 8.8 4.4 4.4 0 000-8.8zM0 20.71a4.4 4.4 0 118.8 0 4.4 4.4 0 01-8.8 0zm13.2-4.4a4.4 4.4 0 100 8.8 4.4 4.4 0 000-8.8zM91.13 0v35.2h-8.25V24.2h-5.5v11h-8.25V0h8.25v15.4h5.5V0h8.25zM69.98 24.2c-4.51 0-8.25 3.74-8.25 8.25s3.74 8.25 8.25 8.25 8.25-3.74 8.25-8.25-3.74-8.25-8.25-8.25z" transform="translate(0 -8)"></path></svg></PartnerLogo>;
const UnileverLogo = () => <PartnerLogo><svg className="h-8" viewBox="0 0 32 36" fill="currentColor"><path d="M16 0C7.16 0 0 7.16 0 16s7.16 16 16 16 16-7.16 16-16S24.84 0 16 0zm0 30.4C8.05 30.4 1.6 23.95 1.6 16S8.05 1.6 16 1.6 30.4 8.05 30.4 16 23.95 30.4 16 30.4z"></path><path d="M16 3.2c-7.04 0-12.8 5.76-12.8 12.8s5.76 12.8 12.8 12.8 12.8-5.76 12.8-12.8S23.04 3.2 16 3.2zm7.6 18.56c-.24.64-.8.96-1.44.96-.48 0-.88-.16-1.2-.48l-4.96-4.96-4.96 4.96c-.32.32-.72.48-1.2.48-.64 0-1.2-.32-1.44-.96-.32-.72-.08-1.6.56-2.24l4.96-4.96-4.96-4.96c-.64-.64-.88-1.52-.56-2.24.24-.64.8-.96 1.44-.96.48 0 .88.16 1.2.48l4.96 4.96 4.96-4.96c.32-.32.72-.48 1.2-.48.64 0 1.2.32 1.44.96.32.72.08 1.6-.56 2.24l-4.96 4.96 4.96 4.96c.64.64 .88 1.52.56 2.24z"></path></svg></PartnerLogo>;
const PelotonLogo = () => <PartnerLogo><svg className="h-6" viewBox="0 0 111 28" fill="currentColor"><path d="M0 27.04h9.36V9.38h4.68v17.66h9.36V9.38h4.68v17.66h9.36V0H0v27.04zM46.8 0h14.04v8.2H46.8V0zm0 18.74h14.04v8.3H46.8v-8.3zM70.2 0h14.04v27.04H70.2V0zm21.06 0h14.04v27.04H91.26V0z"></path></svg></PartnerLogo>;
const VercelLogo = () => <PartnerLogo><svg className="h-6" fill="currentColor" viewBox="0 0 75 65"><path d="M37.59.25l36.95 64H.64l36.95-64z"></path></svg></PartnerLogo>;
const ShopifyLogo = () => <PartnerLogo><svg className="h-8" viewBox="0 0 28 32" fill="currentColor"><path d="M25.12 10.21c-.14-.4-.4-.73-.72-.98l-9.2-5.31c-.6-.4-1.4-.4-2 0l-9.2 5.31c-.32.25-.58.58-.72.98L.4 20.18c-.14.4-.14.85 0 1.25.14.4.4.73.72.98l9.2 5.31c.32.18.67.28 1.02.28s.7-.1 1.02-.28l9.2-5.31c.32-.25.58-.58.72-.98l2.88-9.97c.14-.4.14-.85 0-1.25l-2.88-9.97zM14 3.91l7.45 4.3-2.56 8.85H9.11l-2.56-8.85L14 3.91zm9.2 17.34l-7.45 4.3v-8.6h9.11l-1.66 4.3zm-10.95 4.3L4.8 21.25l-1.66-4.3h9.11v8.6z"></path></svg></PartnerLogo>;


const Partners: React.FC = () => {
  return (
    <section className="py-12 bg-[#040406]">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-bold tracking-widest text-gray-500 uppercase">
          Trusted by the world's most innovative companies
        </p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
          <GoogleLogo />
          <TwilioLogo />
          <UnileverLogo />
          <PelotonLogo />
          <VercelLogo />
          <ShopifyLogo />
        </div>
      </div>
    </section>
  );
};

export default Partners;
  