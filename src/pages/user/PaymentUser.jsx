/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PaymentContext } from "../../context/PaymentContext";

import NavBar from "../../components/NavBar";
import Modal from "../../components/modal/Modal";

export default function PaymentUser() {
  const { isPaid, setIsPaid } = useContext(PaymentContext);
  const navigate = useNavigate();

  const handlePayment = () => {
    setIsPaid(true);
    navigate("/myticket");
  };
  return (
    <>
      <NavBar />
      <Modal />

      <div className="h-[90vh] flex flex-col justify-center items-center scale-[85%]">
        <h1 className="text-4xl w-[1267px] mb-[28px]">Invoice</h1>
        <div className="h-[659px] w-[1267px] grid grid-cols-[796px_447px]  gap-[24px]">
          <div className="grid grid-rows-[154px_160px] gap-[24px]">
            <div className=" border-[1px] rounded-md border-[#bbb] bg-[#eee] flex gap-[44px] pl-[38px] items-center">
              <div>
                <img src="../../src/assets/images/error.svg" alt="error-svg" />
              </div>
              <div className="w-[626px] h-[100px] flex flex-col justify-between">
                <p className="text-lg">
                  Silakan melakukan pembayaran memalui M-Banking, E-Banking dan ATM Ke No.rek Yang Tertera.
                </p>
                <p className="text-lg">No.rek : 09812312312</p>
              </div>
            </div>
            <div className=" border-[1px] rounded-md border-[#bbb]">
              <div className="flex flex-col justify-between h-[160px]">
                <div className="w-[186px] h-[34px] bg-gradient-to-r from-[#ec7ab7] to-[#ec7a7a] rounded-br-full pl-[20px]">
                  <img src="/landtick-logo-white.svg" alt="logo-white" className="mt-1.5" />
                </div>
                <div className="pb-[12px]">
                  <div className="grid grid-cols-4 pl-[33px] mb-[12px]">
                    <p>No. Tanda Pengenal</p>
                    <p>Nama Pemesan</p>
                    <p>No. Handphone</p>
                    <p>Email</p>
                  </div>
                  <hr className="border-0 h-[.3px] bg-[#bbb] mb-[8px]" />
                  <div className="grid grid-cols-4 pl-[33px]">
                    <p className="text-[#b1b1b1]">31175033003970001</p>
                    <p className="text-[#b1b1b1]">Anto</p>
                    <p className="text-[#b1b1b1]">083896833112</p>
                    <p className="text-[#b1b1b1]">anto@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[732px] h-[282px] grid grid-cols-[1fr_282px]">
              <div>
                <h1 className="text-4xl">Rincian Harga</h1>
                <div className="w-[446px] h-[137px] border-[1px] rounded-md border-slate-300 mt-[14px] grid grid-rows-[1fr_46px]">
                  <div className="grid grid-cols-[1fr_137px] pl-[23px] pr-[16px]">
                    <div className="flex items-center">
                      <p>Argo Willis (Dewasa) x 1</p>
                    </div>
                    <div className="flex items-center justify-start">
                      <p>Rp. 250.000</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-[1fr_137px] bg-slate-300 pl-[23px] pr-[16px]">
                    <div className="flex items-center">
                      <p className="text-2xl font-semibold">Total</p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-2xl font-bold">Rp. 250.000</p>
                    </div>
                  </div>
                </div>
                <button
                  className="w-[446px] py-2 bg-gradient-to-r from-[#ec7ab7] to-[#ec7a7a] text-white font-semibold hover:bg-gradient-to-r hover:from-[#e65ca6] hover:to-[#e05c5c] duration-300 mt-[21px] rounded-lg"
                  onClick={handlePayment}
                >
                  Bayar Sekarang
                </button>
              </div>
              <div className="flex justify-center items-center p-16">
                <img src="../../src/assets/images/qr-code.svg" alt="qr-code" className="scale-125 ml-20 -mt-4" />
              </div>
            </div>
          </div>
          <div className="">
            <div className="h-[115px] bg-[#d0d0d0] flex justify-between">
              <div className="pl-[36px] pt-[21px]">
                <p className="font-bold text-4xl ">Kereta Api</p>
                <p className="text-[#878787] mt-1">
                  <span className="font-bold">Saturday</span>, 21 Februari 2020
                </p>
              </div>
              <div className="mr-[36px] mt-[18px]">
                <img src="../src/assets/images/qr-code-payment.svg" alt="qr-code" className="h-[78]" />
              </div>
            </div>
            <div className="h-[299px] bg-[#f5f5f5] w-full">
              <div className="h-[102px] pl-[36px] flex justify-center flex-col">
                <p className="font-bold text-2xl">Argo Willis</p>
                <p className="text-sm">Eksekutif (H)</p>
              </div>
              <div className="grid grid-cols-[92px_144px_211px]">
                <div className="pl-[51px] pt-[18px]">
                  <img src="../src/assets/images/ellipse-hub-large.svg" alt="ellipse-hub" />
                </div>
                <div>
                  <p className="text-lg font-semibold">05.00</p>
                  <p className="text-sm text-gray-400">21 Februari 2020</p>
                  <p className="text-lg font-semibold mt-[71px]">10.05</p>
                  <p className="text-sm text-gray-400">21 Februari 2020</p>
                </div>
                <div className="pl-[32px]">
                  <p className="text-lg font-semibold">Jakarta (GMR)</p>
                  <p className="text-sm text-gray-400">Stasiun Gambir</p>
                  <p className="text-lg font-semibold mt-[71px]">Surabaya(SBY)</p>
                  <p className="text-sm text-gray-400">Stasiun Surabaya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}