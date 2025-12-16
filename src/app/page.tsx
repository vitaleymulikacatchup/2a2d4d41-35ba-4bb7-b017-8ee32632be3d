"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import ProductCardSix from '@/components/sections/product/ProductCardSix';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Smartphone, TrendingUp, Zap, CheckCircle, Phone, Store, Heart } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="largeSizeExtraLargeSpacing"
      background="circleGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="PhoneHub"
          navItems={[
            { name: "Products", id: "products" },
            { name: "Features", id: "features" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardRotatedCarousel
          title="Experience Premium Phones"
          description="Discover the latest flagship smartphones with cutting-edge technology, stunning displays, and powerful performance. Find your perfect phone today."
          tag="New Arrivals"
          tagIcon={Smartphone}
          buttons={[
            { text: "Shop Now", href: "#products" },
            { text: "Learn More", href: "#features" }
          ]}
          carouselItems={[
            {
              id: "1",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1765893707620-w6yo87yl.jpg",
              imageAlt: "Latest flagship phone"
            },
            {
              id: "2",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1765893709033-ds8fr91x.jpg",
              imageAlt: "Premium mobile display"
            },
            {
              id: "3",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1765893710295-o0kf73dv.jpg",
              imageAlt: "Modern smartphone technology"
            },
            {
              id: "4",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1765893711378-h2hajin3.jpg",
              imageAlt: "High-end phone design"
            },
            {
              id: "5",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1765893712473-cnabevpw.jpg",
              imageAlt: "Latest phone showcase"
            },
            {
              id: "6",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1765893713601-dv45808w.jpg",
              imageAlt: "Professional phone photography"
            }
          ]}
          autoPlay={true}
          autoPlayInterval={4000}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardSix
          title="Featured Collections"
          description="Explore our curated selection of premium smartphones from leading brands"
          tag="Popular Models"
          tagIcon={TrendingUp}
          products={[
            {
              id: "1",
              name: "Flagship Pro Max",
              price: "$999",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1765893714564-bycgxovg.jpg",
              imageAlt: "Flagship Pro Max smartphone"
            },
            {
              id: "2",
              name: "Premium Ultra",
              price: "$799",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1765893716740-xof6em20.jpg",
              imageAlt: "Premium Ultra phone"
            },
            {
              id: "3",
              name: "Budget Smart",
              price: "$299",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1765893715724-eb336gwd.jpg",
              imageAlt: "Affordable budget smartphone"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="Why Choose Our Phones"
          description="Discover what makes our smartphone selection exceptional"
          tag="Key Benefits"
          tagIcon={Zap}
          features={[
            {
              id: "01",
              title: "Advanced Camera System",
              description: "Professional-grade cameras capture stunning photos and videos in any lighting condition",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1765893718115-2b4sn056.jpg",
              imageAlt: "Advanced camera technology"
            },
            {
              id: "02",
              title: "All-Day Battery Life",
              description: "Long-lasting batteries keep your phone powered from morning to night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1765893719089-b03lq90i.jpg",
              imageAlt: "Battery performance"
            },
            {
              id: "03",
              title: "Crystal Clear Display",
              description: "Immersive AMOLED and OLED screens with vibrant colors and smooth refresh rates",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1765893720307-nhiowwus.jpg",
              imageAlt: "High-quality display technology"
            },
            {
              id: "04",
              title: "Lightning Fast Performance",
              description: "Powerful processors handle everything you throw at them with ease",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1765893721724-5a4wac5q.jpg",
              imageAlt: "Phone processor performance"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="The customer service was exceptional and the phone quality exceeded my expectations. I've never been happier with a purchase. Highly recommended to anyone looking for premium phones at fair prices."
          rating={5}
          author="Sarah Johnson, Tech Enthusiast"
          avatars={[
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1765893722943-11f9lwl2.jpg",
              alt: "Sarah Johnson"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1765893724221-k12zk8pa.jpg",
              alt: "Customer review"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1765893725275-dghx66wd.jpg",
              alt: "Happy customer"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1765893726491-fs0e7cp2.jpg",
              alt: "Satisfied client"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1765893727709-fdk6t2wj.jpg",
              alt: "Verified buyer"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1765893729176-avetlm0j.jpg",
              alt: "Loyal customer"
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Leading Brands"
          description="We partner with the world's top smartphone manufacturers to bring you authentic products"
          tag="Official Partners"
          tagIcon={CheckCircle}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1765893733286-f6ckezh6.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1765893734476-9g7vhysi.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1765893735805-4gdcntxp.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1765893737290-1ctjmnfw.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1765893738201-uwr7wop7.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1765893739472-zl6tl694.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1765893740503-vdimucoe.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1765893741771-0u0tx03s.jpg"
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          speed={40}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Find answers to common questions about our phones and services"
          faqs={[
            {
              id: "1",
              title: "What is your return policy?",
              content: "We offer a 30-day money-back guarantee on all phones. If you're not satisfied, simply return the phone in original condition for a full refund, no questions asked."
            },
            {
              id: "2",
              title: "Do you offer warranty coverage?",
              content: "Yes, all our phones come with manufacturer warranty. We also offer extended warranty options for additional peace of mind and protection."
            },
            {
              id: "3",
              title: "Are the phones original?",
              content: "Absolutely. All phones sold on our platform are 100% authentic and come directly from authorized distributors. We guarantee authenticity or your money back."
            },
            {
              id: "4",
              title: "Do you offer financing options?",
              content: "Yes, we partner with multiple financing providers to offer flexible payment plans. You can choose installment options that work best for your budget."
            },
            {
              id: "5",
              title: "How quickly will my order ship?",
              content: "Most orders ship within 1-2 business days. You'll receive tracking information via email, and standard delivery takes 5-7 business days depending on your location."
            },
            {
              id: "6",
              title: "Do you have a physical store?",
              content: "Yes, we have retail locations in major cities where you can view and test phones before purchase. Visit our contact page to find the store nearest to you."
            }
          ]}
          textPosition="left"
          useInvertedBackground="noInvert"
          animationType="smooth"
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Get in Touch"
          ctaDescription="Have questions? Our support team is here to help you find the perfect phone."
          ctaButton={{ text: "Contact Us", href: "#" }}
          ctaIcon={Phone}
          faqs={[
            {
              id: "1",
              title: "What's the best phone for my needs?",
              content: "Our team specializes in matching customers with the perfect phone based on their requirements. Contact us with details about your usage patterns and budget."
            },
            {
              id: "2",
              title: "Can I trade in my old phone?",
              content: "Yes! We offer trade-in programs for your old phones. Get credit toward your new purchase. Contact us for evaluation."
            },
            {
              id: "3",
              title: "What about technical support?",
              content: "We provide comprehensive technical support for all phones sold. Our experts can help with setup, troubleshooting, and optimization."
            }
          ]}
          useInvertedBackground="noInvert"
          animationType="slide-up"
          accordionAnimationType="smooth"
          showCard={true}
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="Our Story"
          tagIcon={Store}
          title="Your Trusted Phone Retailer Since 2015"
          description="PhoneHub"
          subdescription="Dedicated to bringing you the latest and greatest smartphones"
          icon={Heart}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_359Uh0VXrxxSKLlnHl6PZg7ckgh/uploaded-1765893731953-v5kxoc20.jpg"
          imageAlt="PhoneHub retail store"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="PhoneHub"
          logoAlt="PhoneHub Logo"
        />
      </div>
    </ThemeProvider>
  );
}