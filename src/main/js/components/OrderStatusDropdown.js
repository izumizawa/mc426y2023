import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { updateOrder } from "../services/order";

export default function OrderStatusDropdown(props) {

    const handleChange = (value) => {
        const newStatus = value.target.value
        var order = {...props.order};
        order.status = newStatus;
        updateOrder(order);
    }

    const statusEnum = [
        'Recebido',
        'Em preparo',
        'Em rota de entrega',
        'Finalizado'
    ]

    const statusList = statusEnum.map(s => <MenuItem key={s} value={s}>{s}</MenuItem>)

    return (
        <div>
            <FormControl size="small">
                <InputLabel id="status-label">Status</InputLabel>
                <Select
                    defaultValue={props.order.status == null ? "" : props.order.status}
                    labelId="status-label"
                    id="status"
                    label="Status"
                    onChange={handleChange}
                >
                    {statusList}
                </Select>
            </FormControl>
        </div>
    )
}