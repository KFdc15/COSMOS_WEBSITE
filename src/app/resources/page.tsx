import React from 'react';
import NavBar from '@/components/navbar';

export function Resources() {
    // Danh sách resource, bạn có thể thêm nhiều mục hơn
    const resourcesData = [
        {
            title: 'Scale of the Universe',
            description: 'Khám phá kích thước của vũ trụ từ nhỏ nhất đến lớn nhất với hình ảnh minh họa trực quan.',
            link: 'https://scaleofuniverse.com/en/resources',
            image: 'https://scaleofuniverse.com/en/img/scaleofuniverse.jpg',
        },
        {
            title: 'NASA Image and Video Library',
            description: 'Kho hình ảnh và video về không gian, các hành tinh, tàu vũ trụ và nhiều hơn nữa.',
            link: 'https://images.nasa.gov/',
            image: 'https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png',
        },
        {
            title: 'ESA Space for Kids',
            description: 'Trang web của Cơ quan Vũ trụ Châu Âu dành cho trẻ em, với các bài viết, trò chơi và video về vũ trụ.',
            link: 'https://www.esa.int/kids/en/home',
            image: 'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2019/11/esa_kids_logo/20698238-1-eng-GB/ESA_Kids_logo_pillars.jpg',
        },
        {
            title: 'Astronomy Picture of the Day',
            description: 'Mỗi ngày một bức ảnh thiên văn tuyệt đẹp kèm giải thích từ các nhà thiên văn học.',
            link: 'https://apod.nasa.gov/apod/astropix.html',
            image: 'https://apod.nasa.gov/apod/calendar/S_210101.jpg',
        },
        {
            title: 'Solar System Exploration',
            description: 'Khám phá hệ Mặt Trời với thông tin chi tiết về các hành tinh, vệ tinh và tàu thăm dò.',
            link: 'https://solarsystem.nasa.gov/',
            image: 'https://solarsystem.nasa.gov/system/feature_items/images/82_carousel_ss_overview.jpg',
        },
        {
            title: 'HubbleSite',
            description: 'Khám phá các hình ảnh và phát hiện từ kính viễn vọng Hubble.',
            link: 'https://hubblesite.org/',
            image: 'https://hubblesite.org/files/live/sites/hubble/files/home/_images/hubble-logo.png',
        },
    ];

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <NavBar />
            <div className="fixed inset-0 -z-10 bg-black">
                {/* Các ngôi sao */}
                {[...Array(80)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-white opacity-80"
                        style={{
                            width: `${Math.random() * 2 + 1}px`,
                            height: `${Math.random() * 2 + 1}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            boxShadow: `0 0 6px 1px white`
                        }}
                    />
                ))}
            </div>

            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-center w-full">
                <h1 className="text-4xl font-bold text-center w-full">Resources</h1>
                <p className="text-lg text-center w-full text-white/80">
                    Tổng hợp các nguồn tài nguyên hữu ích giúp bạn khám phá vũ trụ và khoa học không gian.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 w-full max-w-5xl mt-8 justify-items-center mx-auto justify-center">
                    {resourcesData.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-64 h-80 bg-white/10 rounded-2xl shadow-lg flex flex-col items-center p-6 backdrop-blur-md transition-transform hover:scale-105 hover:bg-white/20"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-32 h-32 object-cover rounded-xl mb-4 border border-white/20 shadow"
                            />
                            <p className="text-white text-lg font-semibold mb-2 text-center">{item.title}</p>
                            <p className="text-white text-center text-sm">{item.description}</p>
                        </a>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default Resources;