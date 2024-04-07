package pl.ansb.model;

public enum Schema {
    NOT("Bramka logicza NOT", ""),
    AND("Bramka logicza AND", ""),
    NAND("Bramka logicza NAND", ""),
    OR("Bramka logicza OR", ""),
    NOR("Bramka logicza NOR", ""),
    XOR("Bramka logicza XOR", "");

    private String name;
    private String shortDescription;

    Schema(String name, String shortDescription) {
        this.name = name;
        this.shortDescription = shortDescription;
    }
}
