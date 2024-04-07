package pl.ansb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/schema")
public class SchemaController {

    @GetMapping("/semi_summator")
    public String semiSummator(Model model) {
        return "schema/semi-summator-schema :: semi-summator-schema-fragment";
    }

    @GetMapping("/1_bit_summator")
    public String oneBitSummator(Model model) {
        return "schema/1-bit-summator-schema :: 1-bit-summator-schema-fragment";
    }

    @GetMapping("/4_bit_serial_transfer_summator")
    public String fourBitSerialTransferSummator(Model model) {
        return "schema/4-bit-serial-transfer-summator-schema :: 4-bit-serial-transfer-summator-schema-fragment";
    }

    @GetMapping("/d_type_switch")
    public String dTypeSwitch(Model model) {
        return "/schema/d-type-switch-schema :: d-type-switch-schema-fragment";
    }

    @GetMapping("/rs_type_synchronous_switch")
    public String rsTypeSynchronousSwitch(Model model) {
        return "schema/rs-type-synchronous-switch-schema :: rs-type-synchronous-switch-schema-fragment";
    }

    @GetMapping("/rs_type_asynchronous_switch")
    public String rsTypeAsynchronousSwitch(Model model) {
        return "schema/rs-type-asynchronous-switch-schema :: rs-type-asynchronous-switch-schema-fragment";
    }

    @GetMapping("/8421_to_gray_converter")
    public String _8421ToGrayConverter(Model model) {
        return "schema/8421-to-gray-converter-schema :: 8421-to-gray-converter-schema-fragment";
    }

    @GetMapping("/bcd_to_aiken_converter")
    public String bcdToAikenConverter(Model model) {
        return "schema/bcd-to-aiken-converter-schema :: bcd-to-aiken-converter-schema-fragment";
    }

    @GetMapping("/decimal_to_8421_converter")
    public String decimalTo8421Converter(Model model) {
        return "schema/decimal-to-8421-converter-schema :: decimal-to-8421-converter-schema-fragment";
    }
}
