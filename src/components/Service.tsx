import React, { Fragment } from 'react'

const service = [
    {id:1, title: "Free Shipping", des: "Orders $50 or more", icon: <svg xmlns="http://www.w3.org/2000/svg" className='text-white' width="32" height="32" fill="white" viewBox="0 0 512 512"><title>ionicons-v5-p</title><path d="M461.81,53.81a4.4,4.4,0,0,0-3.3-3.39c-54.38-13.3-180,34.09-248.13,102.17a294.9,294.9,0,0,0-33.09,39.08c-21-1.9-42-.3-59.88,7.5-50.49,22.2-65.18,80.18-69.28,105.07a9,9,0,0,0,9.8,10.4l81.07-8.9a180.29,180.29,0,0,0,1.1,18.3,18.15,18.15,0,0,0,5.3,11.09l31.39,31.39a18.15,18.15,0,0,0,11.1,5.3,179.91,179.91,0,0,0,18.19,1.1l-8.89,81a9,9,0,0,0,10.39,9.79c24.9-4,83-18.69,105.07-69.17,7.8-17.9,9.4-38.79,7.6-59.69a293.91,293.91,0,0,0,39.19-33.09C427.82,233.76,474.91,110.9,461.81,53.81ZM298.66,213.67a42.7,42.7,0,1,1,60.38,0A42.65,42.65,0,0,1,298.66,213.67Z" style={{ fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px' }} /><path d="M109.64,352a45.06,45.06,0,0,0-26.35,12.84C65.67,382.52,64,448,64,448s65.52-1.67,83.15-19.31A44.73,44.73,0,0,0,160,402.32" style={{ fill: "none", stroke: "#fff", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32px" }} /></svg>},
    {id:2, title: "Secure Payment", des: "100% secure payment", icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path fill-rule="nonzero" d="M11 2l7.298 2.28a1 1 0 0 1 .702.955V7h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1l-3.22.001c-.387.51-.857.96-1.4 1.33L11 22l-5.38-3.668A6 6 0 0 1 3 13.374V5.235a1 1 0 0 1 .702-.954L11 2zm0 2.094L5 5.97v7.404a4 4 0 0 0 1.558 3.169l.189.136L11 19.58 14.782 17H10a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h7V5.97l-6-1.876zM11 12v3h9v-3h-9zm0-2h9V9h-9v1z"/> </g> </svg>},
    {id:3, title: "We Support", des: "24/7 amazing services", icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-shield-check" viewBox="0 0 16 16"> <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/> <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/> </svg>},
    {id:4, title: "Get 20% Off 1 Item", des: "When you sign up", icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-info-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/> </svg>},
]

const Service = () => {
    return (
        <Fragment>
            <div className="bg-primary my-4">
                <div className="mx-4 sm:mx-8 md:mx-22 lg:mx-32 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-center justify-between text-white gap-x-8">
                    {
                    service.map((item, i) => ( 
                    <div key={i} className="mx-auto xl:mx-0 flex gap-x-4 items-center py-5 px-4 space-y-2">
                        <div className='w-[32px] h-[32px]'>
                            {item.icon}
                        </div>
                        <div className='flex flex-col justify-center' >
                            <h5 className="font-semibold">{item.title}</h5>
                            <p className="text-gray-200">{item.des}</p>
                        </div>
                    </div>
                    )
                )} 
                </div>
            </div>
        </Fragment>
    )
}

export default Service
