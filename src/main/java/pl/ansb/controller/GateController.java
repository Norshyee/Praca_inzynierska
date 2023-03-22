package pl.ansb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/gate")
public class GateController {

    @GetMapping("/and")
    public String andGate(Model model){
        model.addAttribute("title","Bramka AND");
        return "index";
    }
}
