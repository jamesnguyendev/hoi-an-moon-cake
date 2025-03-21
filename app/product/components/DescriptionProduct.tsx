const DescriptionProduct = ({ description }: { description?: string }) => {
  return (
    <section className="container my-12">
      <div className="flex">
        <div className="bg-second px-5 py-3 font-bold text-white ">Mô tả</div>
      </div>
      <div
        className="flex flex-col gap-3 border border-gray-300 p-7"
        dangerouslySetInnerHTML={{ __html: description as string }}
      ></div>
    </section>
  );
};

export default DescriptionProduct;
