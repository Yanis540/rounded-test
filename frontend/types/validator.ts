import { z } from "zod";

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const phoneNumberValidator = z.string().regex(phoneRegex, 'Invalid Number!')
export const callsValidator = z.object({
    to:phoneNumberValidator
})