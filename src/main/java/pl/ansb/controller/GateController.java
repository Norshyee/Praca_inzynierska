package pl.ansb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/gate")
public class GateController {

    @GetMapping("/not")
    public String notGate(Model model){
        model.addAttribute("title","Bramka NOT");
        model.addAttribute("modelType","not-gate");
        return "index";
    }

    @GetMapping("/and")
    public String andGate(Model model){
        model.addAttribute("title","Bramka AND");
        model.addAttribute("modelType","and-gate");
        return "index";
    }

    @GetMapping("/nand")
    public String nandGate(Model model){
        model.addAttribute("title","Bramka NAND");
        model.addAttribute("modelType","nand-gate");
        return "index";
    }

    @GetMapping("/or")
    public String orGate(Model model){
        model.addAttribute("title","Bramka OR");
        model.addAttribute("modelType","or-gate");
        return "index";
    }

    @GetMapping("/nor")
    public String norGate(Model model){
        model.addAttribute("title","Bramka NOR");
        model.addAttribute("modelType","nor-gate");
        return "index";
    }

    @GetMapping("/xor")
    public String xorGate(Model model){
        model.addAttribute("title","Bramka XOR");
        model.addAttribute("modelType","xor-gate");
        return "index";
    }
}
