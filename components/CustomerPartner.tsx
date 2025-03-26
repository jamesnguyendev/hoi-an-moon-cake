import Image from 'next/image';

const CustomerPartner = () => {
  return (
    <section className="container my-8">
      <div>
        <div className="text-center text-4xl font-semibold text-primary">KHÁCH HÀNG – ĐỐI TÁC</div>
        <Image
          src={'/images/logo-khach-hang-DN-pc-1536x900.png'}
          width={900}
          height={900}
          className="w-full"
          alt="logo khách hàng dn pc"
        />
      </div>
    </section>
  );
};

export default CustomerPartner;
