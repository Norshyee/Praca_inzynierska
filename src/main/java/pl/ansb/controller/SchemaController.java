package pl.ansb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/schema")
public class SchemaController {

    @GetMapping("/semi_summator")
    public String semiSummator(Model model){
        model.addAttribute("title","Półsumator");
        model.addAttribute("modelType","semi-summator-schema");
        return "index";
    }

    @GetMapping("/1_bit_summator")
    public String oneBitSummator(Model model){
        model.addAttribute("title","1-bit sumator");
        model.addAttribute("modelType","1-bit-summator-schema");
        return "index";
    }

    @GetMapping("/4_bit_serial_transfer_summator")
    public String fourBitSerialTransferSummator(Model model){
        model.addAttribute("title","4-bit sumator z przeniesieniem szeregowym");
        model.addAttribute("modelType","4-bit-serial-transfer-summator-schema");
        return "index";
    }

    @GetMapping("/d_type_switch")
    public String dTypeSwitch(Model model){
        model.addAttribute("title","Przerzutnik typu D");
        model.addAttribute("modelType","d-type-switch-schema");
        return "index";
    }

    @GetMapping("/rs_type_synchronous_switch")
    public String rsTypeSynchronousSwitch(Model model){
        model.addAttribute("title","Przerzutnik synchroniczny typu RS");
        model.addAttribute("modelType","rs-type-synchronous-switch-schema");
        return "index";
    }

    @GetMapping("/rs_type_asynchronous_switch")
    public String rsTypeAsynchronousSwitch(Model model){
        model.addAttribute("title","Przerzutnik asynchroniczny typu RS");
        model.addAttribute("modelType","rs-type-asynchronous-switch-schema");
        return "index";
    }

    @GetMapping("/8421_to_gray_converter")
    public String _8421ToGrayConverter(Model model){
        model.addAttribute("title","Konwerter z 8421 na Gray'a");
        model.addAttribute("modelType","8421-to-gray-converter-schema");
        return "index";
    }

    @GetMapping("/bcd_to_aiken_converter")
    public String bcdToAikenConverter(Model model){
        model.addAttribute("title","Konwerter z BCD na Aiken'a");
        model.addAttribute("modelType","bcd-to-aiken-converter-schema");
        return "index";
    }

    @GetMapping("/decimal_to_8421_converter")
    public String decimalTo8421Converter(Model model){
        model.addAttribute("title","Konwerter liczby dziesiętnej na 8421");
        model.addAttribute("modelType","decimal-to-8421-converter-schema");
        return "index";
    }
}
