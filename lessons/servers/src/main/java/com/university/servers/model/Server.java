package com.university.servers.model;

import lombok.Data;
import org.springframework.data.annotation.Id;

/**
 * Created by eugen on 12/6/17.
 */
@Data
public class Server {

    @Id
    Integer id;
    String name;
    Integer capacity;
}
