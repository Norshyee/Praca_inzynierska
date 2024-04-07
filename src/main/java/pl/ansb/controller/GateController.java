package pl.ansb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/gate")
public class GateController {

    @GetMapping("/not")
    public String notGate(Model model) {
        return "/gate/not-gate :: not-gate-fragment";
    }

    @GetMapping("/and")
    public String andGate(Model model) {
        return "/gate/and-gate :: and-gate-fragment";
    }

    @GetMapping("/nand")
    public String nandGate(Model model) {
        return "/gate/nand-gate :: nand-gate-fragment";
    }

    @GetMapping("/or")
    public String orGate(Model model) {
        return "/gate/or-gate :: or-gate-fragment";
    }

    @GetMapping("/nor")
    public String norGate(Model model) {
        return "/gate/nor-gate :: nor-gate-fragment";
    }

    @GetMapping("/xor")
    public String xorGate(Model model) {
        return "/gate/xor-gate :: xor-gate-fragment";
    }
}
