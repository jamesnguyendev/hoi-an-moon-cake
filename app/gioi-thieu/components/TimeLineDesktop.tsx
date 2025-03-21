const TimeLineDesktop = () => {
  return (
    <div className="relative hidden md:block">
      <div className="-translate-x-1/5 absolute left-1/3 h-full transform border-l-2 border-dashed border-gray-300 md:left-[20%] lg:left-1/4"></div>
      <div className="space-y-8">
        <div className="flex items-center">
          <div className="w-1/3 pr-8 text-right  md:w-1/5 lg:w-1/4">
            <div className="inline-block rounded-md bg-primary px-7 py-2 text-white">2017</div>
          </div>
          <div className="relative w-1/2 pl-8">
            <div className="absolute left-0 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-yellow-400"></div>
            <div className="rounded-md bg-white p-4 shadow-md">
              <p>
                Ra mắt các combo bánh trung thu Hội An Mooncake, được nhiều khách hàng tin tưởng.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-1/3 pr-8 text-right md:w-1/5 lg:w-1/4">
            <div className="inline-block rounded-md bg-primary px-7 py-2 text-white">2018</div>
          </div>
          <div className="relative w-1/2 pl-8">
            <div className="absolute left-0 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-yellow-400"></div>
            <div className="rounded-md bg-white p-4 shadow-md">
              <p>
                Ra mắt hệ thống phân phối online bánh trung thu. Tiếp cận được nhiều khách hàng hơn.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-1/3 pr-8 text-right md:w-1/5 lg:w-1/4">
            <div className="inline-block rounded-md bg-primary px-7 py-2 text-white">2019</div>
          </div>
          <div className="relative w-1/2 pl-8">
            <div className="absolute left-0 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-yellow-400"></div>
            <div className="rounded-md bg-white p-4 shadow-md">
              <p>
                Những năm thành công với các công ty lớn đặt sản xuất số lượng lớn làm quà tặng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLineDesktop;
