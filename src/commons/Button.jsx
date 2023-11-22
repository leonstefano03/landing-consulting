
import '../styles/Button.css';
export default function Button({onClick}) {

  return (
    <div className={` w-[60px] h-[60px] box-border`}>
      <input
        type="checkbox"
        href="#"
        className="menu-open hidden"
        name="menu-open"
        id="menu-open"
        onChange={onClick}
      />
      <label
        className=" bg-white w-14 h-14 rounded-full absolute pointer z-2 leading-[80px] menu-open-button"
        htmlFor="menu-open"
      >
        <span
          className={` w-6 h-0.5 bg-[#596778] block absolute top-1/2 left-1/2 ml-[-12.5px] mt-[-1.5px] transform -translate-y-[-8px] transition-transform duration-200 line-1`}
        ></span>
        <span
          className={` w-6 h-0.5 bg-[#596778] block absolute top-1/2 left-1/2 ml-[-12.5px] mt-[-1.5px] transform -translate-y-[0px] transition-transform duration-200 line-2`}
        ></span>
        <span
          className={` w-6 h-0.5 bg-[#596778] block absolute top-1/2 left-1/2 ml-[-12.5px] mt-[-1.5px] transform -translate-y-[8px] transition-transform duration-200 line-3`}
        ></span>
      </label>
    </div>
  );
}
