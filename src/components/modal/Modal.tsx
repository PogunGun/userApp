import {Box, Button,Modal,TextField} from "@mui/material";
import React, { FC} from "react";
import ReactDom from "react-dom";
import {Controller, SubmitHandler, useForm, useFormState} from "react-hook-form";
import {nameValidation, usernameValidation} from "../validation/validation";
import {ColorButton} from "../material/searchAppBar";
import { ISignInForm } from "../../type/types";
import { IModal } from "../../type/types";


export const ModalBlock:FC<IModal>=({open,setUserTitle, setTitle, updateUser,setOpen,id,create})=> {
    const {control} = useForm<ISignInForm>({
        mode: 'onChange',
    });

    const {errors} = useFormState({
        control
    })

    const handleClose = () =>{
        setOpen(false)
    }

    const portalDiv = document.getElementById('portal')!;

    return ReactDom.createPortal(
        <Modal
            onClick={(event:React.MouseEvent) =>event.stopPropagation()}
            open={open}
            onClose={()=>handleClose()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style.box}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': {m: 1},
                    }}
                    autoComplete="off"
                >
                    <Controller
                        control={control}
                        name="name"
                        rules={nameValidation}
                        render={({field}) => (
                            <TextField
                                label="Name"
                                onChange={(e) => {
                                    field.onChange(e)
                                    setTitle(e.target.value)
                                }
                                }
                                fullWidth={true}
                                size="small"
                                margin="normal"
                                className="auth-form__input"
                                error={!!errors.name?.message}
                                helperText={errors?.name?.message}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="username"
                        rules={usernameValidation}
                        render={({field}) => (
                            <TextField
                                label="UserName"
                                onChange={(e) => {
                                    field.onChange(e)
                                    setUserTitle(e.target.value)
                                }}
                                fullWidth={true}
                                size="small"
                                margin="normal"
                                className="auth-form__input"
                                error={!!errors?.username?.message}
                                helperText={errors?.username?.message}
                            />
                        )}
                    />

                    {create?
                        <ColorButton onClick={() =>create()}>Create User</ColorButton>:
                        <Button onClick={() =>{
                            if (updateUser) {
                                if (typeof id === "number") {
                                    updateUser(id)
                                }
                            }}}>Change User</Button>

                    }
                </Box>
            </Box>
        </Modal>,portalDiv
)
}

export const style = {
    box: {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    }
}

