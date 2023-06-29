import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { updateOrder } from "../services/order";
import OrderUpdateStorage from "../hooks/OrderUpdateStorage";

export default function OrderStatusDropdown(props) {
    const orderUpdateStorage = OrderUpdateStorage.getInstance();

    const handleChange = (value) => {
        const newStatus = value.target.value
        var order = {...props.order};
        order.status = newStatus;
        updateOrder(order);
        orderUpdateStorage.getObservable().notify();
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
                    defaultValue={props.order.status}
                    value={props.order.status}
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
