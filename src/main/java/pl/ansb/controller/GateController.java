package pl.ansb.controller;

import ch.qos.logback.core.model.Model;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/gate")
public class GateController {

    @GetMapping("/and")
    public String andGate(Model model){

        return "index";
    }
}
