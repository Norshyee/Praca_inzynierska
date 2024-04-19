package pl.ansb.controller;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DefaultController {

    @Value("${info.app.version}")
    private String projectVersion;

    @Value("${git.commit.id.abbrev}")
    private String commitId;

    @GetMapping("/")
    public String homePage(HttpServletResponse response, Model model) {
        response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        response.setHeader("Pragma", "no-cache");
        response.setHeader("Expires", "0");
        model.addAttribute("version", projectVersion);
        model.addAttribute("commitId", commitId);

        return "index";
    }

    @GetMapping("/main")
    public String homePageFragment(Model model) {
        return "main :: main-fragment";
    }
}
