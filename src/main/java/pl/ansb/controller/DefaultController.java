package pl.ansb.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DefaultController {

    @Value("${project.version}")
    private String projectVersion;

    @Value("${git.commit.id.abbrev}")
    private String commitId;

    @GetMapping("/")
    public String homePage(Model model) {
        model.addAttribute("version", projectVersion);
        model.addAttribute("commitId", commitId);

        return "index";
    }
}
