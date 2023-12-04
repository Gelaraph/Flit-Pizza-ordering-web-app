import React from "react";

const CustomerDetails = () => {
  return (
    <div>
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto ">
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 ">
          <div class="block w-full overflow-x-auto">
            <table class="items-center bg-transparent w-full border-collapse ">
              <thead>
                <tr>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle  py-3 text-xs uppercase  whitespace-nowrap font-semibold text-left">
                    Product
                  </th>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle  py-3 text-xs uppercase whitespace-nowrap font-semibold text-left">
                    Name
                  </th>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle  py-3 text-xs uppercase whitespace-nowrap font-semibold text-left">
                    Extra
                  </th>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle  py-3 text-xs uppercase whitespace-nowrap font-semibold text-left">
                    Price
                  </th>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle  py-3 text-xs uppercase  whitespace-nowrap font-semibold text-left">
                    Qauntity
                  </th>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle  py-3 text-xs uppercase whitespace-nowrap font-semibold text-left">
                    Total
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border border-solid border-blueGray-100 border-l-0 border-r-0 ">
                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                    {/* <Image
                      src={Burger}
                      alt=""
                      width={100}
                      height={100}
                      className=""
                    /> */}
                  </td>
                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                    Burger Pizza
                  </td>
                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 "></td>
                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                    $40
                  </td>
                  <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    4
                  </td>
                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
                    $46
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
