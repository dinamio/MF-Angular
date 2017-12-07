package com.university.servers.controller;

import com.university.servers.dao.ServerDao;
import com.university.servers.model.Server;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by eugen on 12/6/17.
 */
@RestController
@RequestMapping("rest")
public class ServerController {

    @Autowired
    ServerDao serverDao;

    @GetMapping("appName")
    public Map getAppName() {
        Map<String, String> map = new HashMap<>();
        map.put("name","Awesome app");
        return map;
    }

    @GetMapping("servers")
    public List<Server> getServers () {
        return (List<Server>) serverDao.findAll();
    }

    @PostMapping("server")
    public void addServer(@RequestBody Server server) {
        serverDao.save(server);
    }

    @PostMapping("servers")
    public void addServers(@RequestBody List<Server> servers) {
        serverDao.save(servers);
    }

    @GetMapping("server/{id}")
    public Server getServer(@PathVariable Integer id) {
        return serverDao.findOne(id);
    }

    @DeleteMapping("server/{id}")
    public void deleteServer(@PathVariable Integer id) {
        serverDao.delete(id);
    }


    @PutMapping("server/{id}")
    public void updateServer(@RequestBody Server server, @PathVariable Integer id) {
        server.setId(id);
        serverDao.save(server);
    }
}

