const BreadcrumProduct = ({ title, breadcrum }: { breadcrum?: any; title: any }) => {
  return (
    <span className="container mt-3 flex items-center gap-1 text-sm ">
      Shop
      <svg
        className="mx-1 h-3 w-3 text-second rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 9 4-4-4-4"
        />
      </svg>
      {breadcrum ? (
        <div className="flex items-center gap-2">
          <span className="line-clamp-1">{breadcrum}</span>
          <svg
            className="mx-1 h-3 w-3 text-second rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </div>
      ) : null}
     <span className="line-clamp-1"> {title}</span>
    </span>
  );
};

export default BreadcrumProduct;
