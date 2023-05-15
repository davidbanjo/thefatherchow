import React from 'react'

const DeliveryInfo = () => {
  return (
    <div className='fc_delivery-container-row'>
        <div className='fc_delivery-container-row-col'>
            <form className='deliveryForm'>
                <label>
                    Room Number
                <input className='inputBox' type='text' placeholder='C201' name='RoomNo' />
                </label>
                <label>
                    Male Hostels
                <select name='RoomNo' className='inputBox'>
                    <option>
                        Please select your hostel
                    </option>
                    <option>
                        Marire Hall
                    </option>
                    <option>
                        King Jaja Hall
                    </option>
                    <option>
                        Biobaku Hall
                    </option>
                    <option>
                        Enijoku Hall
                    </option>
                </select>
                </label>
                <label>
                    Female Hostels
                    <select name='RoomNo' className='inputBox'>
                    <option>
                        Please select your hostel
                    </option>
                    <option>
                        Moremi Hall
                    </option>
                    <option>
                        Madam Tinubu Hall
                    </option>
                    <option>
                        Honors
                    </option>
                    <option>
                        Makama Hall
                    </option>
                </select>
                </label>
            </form>
        </div>
    </div>
  )
}

export default DeliveryInfo