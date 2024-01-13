import React from 'react'
import closeModal from "../../asset/svg/closeModal.svg"

export default function Modal({ children, onClose, title , content }) {
    return (
        <div
            id="updateData"
            aria-hidden="true"
            className="fixed backdrop-blur-sm flex bg-opacity-25 inset-0 justify-center z-30"
        >
            <div className="fixed w-full md:w-auto max-h-full overflow-y-auto p-5">
                <div className="relative rounded-lg shadow bg-[#283d50] text-xs md:text-sm">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <div className="flex flex-col md:flex-row gap-5 md:items-center">
                            <h3 className="md:text-lg font-semibold text-white">
                            {title}
                        </h3>
                            {content ? <div>
                                {content}
                            </div> : null}
                        </div>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="crud-modal"
                            onClick={onClose}
                        >
                            <img src={closeModal} alt="iconClose" className='w-5' />
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}
