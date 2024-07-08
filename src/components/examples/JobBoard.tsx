import { Caption, Link, Text, Title } from "@components/typography"
import { Card } from "@components/Card";
import { Clock, CreditCard, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import React from "react";

export const JobBoard = () => {
    return (
        <div>
            <div className="space-y-4 mx-auto">
                <JobCard
                    location="Remote"
                    posted="6h"
                    type="Full Time"
                    salary="$80k - $120k"
                    bg="#F97316"
                    role="Software Engineer/Sr. Software Engineer"
                    company="Squirely"
                >
                    <svg className="text-white size-6" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.0925 1.05386L21.1595 0L17.8451 12.3696L14.8528 1.20224L10.9197 2.2561L14.1527 14.3216L6.10008 6.26898L3.22089 9.14817L12.0536 17.981L1.05386 15.0336L0 18.9666L12.0186 22.187C11.881 21.5935 11.8082 20.9751 11.8082 20.3397C11.8082 15.8421 15.4542 12.1961 19.9518 12.1961C24.4494 12.1961 28.0954 15.8421 28.0954 20.3397C28.0954 20.971 28.0235 21.5856 27.8876 22.1756L38.8103 25.1023L39.8641 21.1693L27.7977 17.9361L38.7982 14.9885L37.7443 11.0555L25.6784 14.2885L33.731 6.23592L30.8518 3.35673L22.1416 12.067L25.0925 1.05386Z" fill="currentColor"/>
                        <path d="M27.8775 22.2217C27.5403 23.6473 26.8284 24.928 25.8516 25.9541L33.7646 33.8672L36.6438 30.988L27.8775 22.2217Z" fill="currentColor"/>
                        <path d="M25.7717 26.0366C24.7831 27.0463 23.5338 27.7998 22.1328 28.1881L25.0122 38.9341L28.9452 37.8802L25.7717 26.0366Z" fill="currentColor"/>
                        <path d="M21.9859 28.2274C21.3359 28.3945 20.6546 28.4833 19.9525 28.4833C19.2003 28.4833 18.4719 28.3813 17.7804 28.1904L14.8984 38.9462L18.8314 40L21.9859 28.2274Z" fill="currentColor"/>
                        <path d="M17.6404 28.1511C16.2608 27.7435 15.0337 26.9804 14.0653 25.9678L6.13281 33.9003L9.012 36.7795L17.6404 28.1511Z" fill="currentColor"/>
                        <path d="M13.9999 25.8976C13.0481 24.8786 12.3548 23.615 12.0248 22.2114L1.06641 25.1477L2.12026 29.0807L13.9999 25.8976Z" fill="currentColor"/>
                    </svg>
                </JobCard>
                <JobCard
                    location="Lubumbashi"
                    posted="2 Weeks"
                    type="Full Time"
                    salary="$90k - $160k"
                    bg="#394149"
                    role="Senior Frontend Developer"
                    company="ZigZag"
                >
                    <svg className="text-white size-6" width="78" height="30" viewBox="0 0 78 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_613_25)">
                            <path d="M18.5147 0C15.4686 0 12.5473 1.21005 10.3934 3.36396L3.36396 10.3934C1.21005 12.5473 0 15.4686 0 18.5147C0 24.8579 5.14214 30 11.4853 30C14.5314 30 17.4527 28.7899 19.6066 26.636L24.4689 21.7737C24.469 21.7738 24.4689 21.7736 24.4689 21.7737L38.636 7.6066C39.6647 6.57791 41.0599 6 42.5147 6C44.9503 6 47.0152 7.58741 47.7311 9.78407L52.2022 5.31296C50.1625 2.11834 46.586 0 42.5147 0C39.4686 0 36.5473 1.21005 34.3934 3.36396L15.364 22.3934C14.3353 23.4221 12.9401 24 11.4853 24C8.45584 24 6 21.5442 6 18.5147C6 17.0599 6.57791 15.6647 7.6066 14.636L14.636 7.6066C15.6647 6.57791 17.0599 6 18.5147 6C20.9504 6 23.0152 7.58748 23.7311 9.78421L28.2023 5.31307C26.1626 2.1184 22.5861 0 18.5147 0Z" fill="currentColor"/>
                            <path d="M39.3627 22.3934C38.334 23.4221 36.9388 24 35.484 24C33.0487 24 30.984 22.413 30.2679 20.2167L25.7969 24.6877C27.8367 27.8819 31.413 30 35.484 30C38.5301 30 41.4514 28.7899 43.6053 26.636L62.6347 7.6066C63.6634 6.57791 65.0586 6 66.5134 6C69.5429 6 71.9987 8.45584 71.9987 11.4853C71.9987 12.9401 71.4208 14.3353 70.3921 15.364L63.3627 22.3934C62.334 23.4221 60.9388 24 59.484 24C57.0485 24 54.9837 22.4127 54.2677 20.2162L49.7967 24.6873C51.8364 27.8818 55.4128 30 59.484 30C62.5301 30 65.4514 28.7899 67.6053 26.636L74.6347 19.6066C76.7886 17.4527 77.9987 14.5314 77.9987 11.4853C77.9987 5.14214 72.8566 0 66.5134 0C63.4673 0 60.546 1.21005 58.3921 3.36396L39.3627 22.3934Z" fill="currentColor"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_613_25">
                                <rect width="78" height="30" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </JobCard>
                <JobCard
                    location="Kinshasa"
                    posted="3 Weeks"
                    type="Full Time"
                    salary="$75k - $130k"
                    bg="#3C4FFF"
                    role="Senior Marketing Program Manager"
                    company="Spectr"
                >
                    <svg className="size-6 text-white" width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.7146 0.516113C11.4582 0.516113 9.2943 1.41245 7.69881 3.00794L0 10.7067V14.2307C0 16.7204 1.06944 18.9603 2.77401 20.5161C1.06944 22.0719 0 24.3118 0 26.8015V30.3255L7.69881 38.0243C9.2943 39.6198 11.4582 40.5161 13.7146 40.5161C16.2043 40.5161 18.4442 39.4467 20 37.7421C21.5558 39.4467 23.7957 40.5161 26.2854 40.5161C28.5418 40.5161 30.7057 39.6198 32.3012 38.0243L40 30.3255V26.8015C40 24.3118 38.9306 22.0719 37.226 20.5161C38.9306 18.9603 40 16.7204 40 14.2307V10.7067L32.3012 3.00794C30.7057 1.41245 28.5418 0.516113 26.2854 0.516113C23.7957 0.516113 21.5558 1.58555 20 3.29012C18.4442 1.58555 16.2043 0.516113 13.7146 0.516113ZM25.7588 20.5161C25.6629 20.4286 25.5688 20.3387 25.4766 20.2465L20 14.7699L14.5234 20.2465C14.4312 20.3387 14.3371 20.4286 14.2412 20.5161C14.3371 20.6036 14.4312 20.6935 14.5234 20.7857L20 26.2623L25.4766 20.7857C25.5688 20.6935 25.6629 20.6036 25.7588 20.5161ZM22.2222 30.3255V32.0085C22.2222 34.2525 24.0414 36.0717 26.2854 36.0717C27.363 36.0717 28.3965 35.6436 29.1585 34.8816L35.5556 28.4845V26.8015C35.5556 24.5575 33.7364 22.7383 31.4924 22.7383C30.4148 22.7383 29.3813 23.1664 28.6193 23.9284L22.2222 30.3255ZM17.7778 30.3255L11.3807 23.9284C10.6187 23.1664 9.58524 22.7383 8.50762 22.7383C6.26359 22.7383 4.44444 24.5575 4.44444 26.8015V28.4845L10.8415 34.8816C11.6035 35.6436 12.637 36.0717 13.7146 36.0717C15.9586 36.0717 17.7778 34.2525 17.7778 32.0085V30.3255ZM17.7778 9.02373V10.7067L11.3807 17.1038C10.6187 17.8658 9.58524 18.2939 8.50762 18.2939C6.26359 18.2939 4.44444 16.4747 4.44444 14.2307V12.5477L10.8415 6.15063C11.6035 5.38864 12.637 4.96056 13.7146 4.96056C15.9586 4.96056 17.7778 6.7797 17.7778 9.02373ZM28.6193 17.1038L22.2222 10.7067V9.02373C22.2222 6.7797 24.0414 4.96056 26.2854 4.96056C27.363 4.96056 28.3965 5.38864 29.1585 6.15063L35.5556 12.5477V14.2307C35.5556 16.4747 33.7364 18.2939 31.4924 18.2939C30.4148 18.2939 29.3813 17.8658 28.6193 17.1038Z" fill="currentColor"/>
                    </svg>
                </JobCard>
            </div>
            <Text size="sm">Logos from <Link href="https://logoipsum.com/" size="sm" intent="neutral" variant="underlined" target="_blank">Logo Ipsum</Link></Text>
        </div>
    )
}

interface JobCardProps {
    children: ReactNode;
    location: string
    bg: string
    role: string
    company: string
    salary: string
    type: "Full Time" | "Part Time" | "Freelance" | "Internship"
    posted: string
}

const JobCard:React.FC<JobCardProps> = ({
    children,
    bg,
    location,
    role,
    company,
    salary,
    type,
    posted,
}) => {
    return (
        <Card href="#" className="grid [grid-template-columns:auto_1fr] gap-4 w-full sm:min-w-[36rem]" variant="mixed">
            <div className="size-10 rounded-full flex justify-center items-center border border-gray-950/5 dark:border-white/5" style={{background:bg}}>
                {children}
            </div>
            <div>
                <div className="flex items-center gap-1.5">
                    <Text as="span" className="my-0 block" weight="medium" size="sm">{company}</Text>
                    <span className="block size-1 rounded-full bg-[--ui-border-color]" />
                    <Caption>{posted} ago</Caption>
                </div>
                <Title as="div" size="base" className="my-1.5" weight="medium">{role}</Title>
                <div className="flex flex-wrap gap-1.5 items-center">
                    <Caption className="flex items-center gap-1.5">
                        <MapPin className="size-3.5" />
                        {location}
                    </Caption>
                    <span className="block size-1 rounded-full bg-[--ui-border-color]" />
                    <Caption className="flex items-center gap-1.5">
                        <Clock className="size-3.5" />
                        {type}
                    </Caption>
                    <span className="block size-1 rounded-full bg-[--ui-border-color]" />
                    <Caption className="flex items-center gap-1.5">
                        <CreditCard className="size-3.5" />
                        {salary}
                    </Caption>
                </div>
            </div>
        </Card>
    )
}

const code = `import { Caption, Link, Text, Title } from "@tailus-ui/typography"
import Card from "@tailus-ui/Card";
import { Clock, CreditCard, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import React from "react";

export const JobBoard = () => {
    return (
        <div>
            <div className="space-y-4 mx-auto">
                <JobCard
                    location="Remote"
                    posted="6h"
                    type="Full Time"
                    salary="$80k - $120k"
                    bg="#F97316"
                    role="Software Engineer/Sr. Software Engineer"
                    company="Squirely"
                >
                    <svg className="text-white size-6" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.0925 1.05386L21.1595 0L17.8451 12.3696L14.8528 1.20224L10.9197 2.2561L14.1527 14.3216L6.10008 6.26898L3.22089 9.14817L12.0536 17.981L1.05386 15.0336L0 18.9666L12.0186 22.187C11.881 21.5935 11.8082 20.9751 11.8082 20.3397C11.8082 15.8421 15.4542 12.1961 19.9518 12.1961C24.4494 12.1961 28.0954 15.8421 28.0954 20.3397C28.0954 20.971 28.0235 21.5856 27.8876 22.1756L38.8103 25.1023L39.8641 21.1693L27.7977 17.9361L38.7982 14.9885L37.7443 11.0555L25.6784 14.2885L33.731 6.23592L30.8518 3.35673L22.1416 12.067L25.0925 1.05386Z" fill="currentColor"/>
                        <path d="M27.8775 22.2217C27.5403 23.6473 26.8284 24.928 25.8516 25.9541L33.7646 33.8672L36.6438 30.988L27.8775 22.2217Z" fill="currentColor"/>
                        <path d="M25.7717 26.0366C24.7831 27.0463 23.5338 27.7998 22.1328 28.1881L25.0122 38.9341L28.9452 37.8802L25.7717 26.0366Z" fill="currentColor"/>
                        <path d="M21.9859 28.2274C21.3359 28.3945 20.6546 28.4833 19.9525 28.4833C19.2003 28.4833 18.4719 28.3813 17.7804 28.1904L14.8984 38.9462L18.8314 40L21.9859 28.2274Z" fill="currentColor"/>
                        <path d="M17.6404 28.1511C16.2608 27.7435 15.0337 26.9804 14.0653 25.9678L6.13281 33.9003L9.012 36.7795L17.6404 28.1511Z" fill="currentColor"/>
                        <path d="M13.9999 25.8976C13.0481 24.8786 12.3548 23.615 12.0248 22.2114L1.06641 25.1477L2.12026 29.0807L13.9999 25.8976Z" fill="currentColor"/>
                    </svg>
                </JobCard>
                <JobCard
                    location="Lubumbashi"
                    posted="2 Weeks"
                    type="Full Time"
                    salary="$90k - $160k"
                    bg="#394149"
                    role="Senior Frontend Developer"
                    company="ZigZag"
                >
                    <svg className="text-white size-6" width="78" height="30" viewBox="0 0 78 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_613_25)">
                            <path d="M18.5147 0C15.4686 0 12.5473 1.21005 10.3934 3.36396L3.36396 10.3934C1.21005 12.5473 0 15.4686 0 18.5147C0 24.8579 5.14214 30 11.4853 30C14.5314 30 17.4527 28.7899 19.6066 26.636L24.4689 21.7737C24.469 21.7738 24.4689 21.7736 24.4689 21.7737L38.636 7.6066C39.6647 6.57791 41.0599 6 42.5147 6C44.9503 6 47.0152 7.58741 47.7311 9.78407L52.2022 5.31296C50.1625 2.11834 46.586 0 42.5147 0C39.4686 0 36.5473 1.21005 34.3934 3.36396L15.364 22.3934C14.3353 23.4221 12.9401 24 11.4853 24C8.45584 24 6 21.5442 6 18.5147C6 17.0599 6.57791 15.6647 7.6066 14.636L14.636 7.6066C15.6647 6.57791 17.0599 6 18.5147 6C20.9504 6 23.0152 7.58748 23.7311 9.78421L28.2023 5.31307C26.1626 2.1184 22.5861 0 18.5147 0Z" fill="currentColor"/>
                            <path d="M39.3627 22.3934C38.334 23.4221 36.9388 24 35.484 24C33.0487 24 30.984 22.413 30.2679 20.2167L25.7969 24.6877C27.8367 27.8819 31.413 30 35.484 30C38.5301 30 41.4514 28.7899 43.6053 26.636L62.6347 7.6066C63.6634 6.57791 65.0586 6 66.5134 6C69.5429 6 71.9987 8.45584 71.9987 11.4853C71.9987 12.9401 71.4208 14.3353 70.3921 15.364L63.3627 22.3934C62.334 23.4221 60.9388 24 59.484 24C57.0485 24 54.9837 22.4127 54.2677 20.2162L49.7967 24.6873C51.8364 27.8818 55.4128 30 59.484 30C62.5301 30 65.4514 28.7899 67.6053 26.636L74.6347 19.6066C76.7886 17.4527 77.9987 14.5314 77.9987 11.4853C77.9987 5.14214 72.8566 0 66.5134 0C63.4673 0 60.546 1.21005 58.3921 3.36396L39.3627 22.3934Z" fill="currentColor"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_613_25">
                                <rect width="78" height="30" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </JobCard>
                <JobCard
                    location="Kinshasa"
                    posted="3 Weeks"
                    type="Full Time"
                    salary="$75k - $130k"
                    bg="#3C4FFF"
                    role="Senior Marketing Program Manager"
                    company="Spectr"
                >
                    <svg className="size-6 text-white" width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.7146 0.516113C11.4582 0.516113 9.2943 1.41245 7.69881 3.00794L0 10.7067V14.2307C0 16.7204 1.06944 18.9603 2.77401 20.5161C1.06944 22.0719 0 24.3118 0 26.8015V30.3255L7.69881 38.0243C9.2943 39.6198 11.4582 40.5161 13.7146 40.5161C16.2043 40.5161 18.4442 39.4467 20 37.7421C21.5558 39.4467 23.7957 40.5161 26.2854 40.5161C28.5418 40.5161 30.7057 39.6198 32.3012 38.0243L40 30.3255V26.8015C40 24.3118 38.9306 22.0719 37.226 20.5161C38.9306 18.9603 40 16.7204 40 14.2307V10.7067L32.3012 3.00794C30.7057 1.41245 28.5418 0.516113 26.2854 0.516113C23.7957 0.516113 21.5558 1.58555 20 3.29012C18.4442 1.58555 16.2043 0.516113 13.7146 0.516113ZM25.7588 20.5161C25.6629 20.4286 25.5688 20.3387 25.4766 20.2465L20 14.7699L14.5234 20.2465C14.4312 20.3387 14.3371 20.4286 14.2412 20.5161C14.3371 20.6036 14.4312 20.6935 14.5234 20.7857L20 26.2623L25.4766 20.7857C25.5688 20.6935 25.6629 20.6036 25.7588 20.5161ZM22.2222 30.3255V32.0085C22.2222 34.2525 24.0414 36.0717 26.2854 36.0717C27.363 36.0717 28.3965 35.6436 29.1585 34.8816L35.5556 28.4845V26.8015C35.5556 24.5575 33.7364 22.7383 31.4924 22.7383C30.4148 22.7383 29.3813 23.1664 28.6193 23.9284L22.2222 30.3255ZM17.7778 30.3255L11.3807 23.9284C10.6187 23.1664 9.58524 22.7383 8.50762 22.7383C6.26359 22.7383 4.44444 24.5575 4.44444 26.8015V28.4845L10.8415 34.8816C11.6035 35.6436 12.637 36.0717 13.7146 36.0717C15.9586 36.0717 17.7778 34.2525 17.7778 32.0085V30.3255ZM17.7778 9.02373V10.7067L11.3807 17.1038C10.6187 17.8658 9.58524 18.2939 8.50762 18.2939C6.26359 18.2939 4.44444 16.4747 4.44444 14.2307V12.5477L10.8415 6.15063C11.6035 5.38864 12.637 4.96056 13.7146 4.96056C15.9586 4.96056 17.7778 6.7797 17.7778 9.02373ZM28.6193 17.1038L22.2222 10.7067V9.02373C22.2222 6.7797 24.0414 4.96056 26.2854 4.96056C27.363 4.96056 28.3965 5.38864 29.1585 6.15063L35.5556 12.5477V14.2307C35.5556 16.4747 33.7364 18.2939 31.4924 18.2939C30.4148 18.2939 29.3813 17.8658 28.6193 17.1038Z" fill="currentColor"/>
                    </svg>
                </JobCard>
            </div>
            <Text size="sm">Logos from <Link href="https://logoipsum.com/" size="sm" intent="neutral" variant="underlined" target="_blank">Logo Ipsum</Link></Text>
        </div>
    )
}

interface JobCardProps {
    children: ReactNode;
    location: string
    bg: string
    role: string
    company: string
    salary: string
    type: "Full Time" | "Part Time" | "Freelance" | "Internship"
    posted: string
}

const JobCard:React.FC<JobCardProps> = ({
    children,
    bg,
    location,
    role,
    company,
    salary,
    type,
    posted,
}) => {
    return (
        <Card href="#" className="grid [grid-template-columns:auto_1fr] gap-4 w-full sm:min-w-[36rem]" variant="mixed">
            <div className="size-10 rounded-full flex justify-center items-center border border-gray-950/5 dark:border-white/5" style={{background:bg}}>
                {children}
            </div>
            <div>
                <div className="flex items-center gap-1.5">
                    <Text as="span" className="block" weight="medium" size="sm">{company}</Text>
                    <span className="block size-1 rounded-full bg-[--ui-border-color]" />
                    <Caption>{posted} ago</Caption>
                </div>
                <Title as="div" size="base" className="my-1.5" weight="medium">{role}</Title>
                <div className="flex flex-wrap gap-1.5 items-center">
                    <Caption className="flex items-center gap-1.5">
                        <MapPin className="size-3.5" />
                        {location}
                    </Caption>
                    <span className="block size-1 rounded-full bg-[--ui-border-color]" />
                    <Caption className="flex items-center gap-1.5">
                        <Clock className="size-3.5" />
                        {type}
                    </Caption>
                    <span className="block size-1 rounded-full bg-[--ui-border-color]" />
                    <Caption className="flex items-center gap-1.5">
                        <CreditCard className="size-3.5" />
                        {salary}
                    </Caption>
                </div>
            </div>
        </Card>
    )
}`

export const jobBoardCode = [{
    code,
    lang : "tsx"
}]