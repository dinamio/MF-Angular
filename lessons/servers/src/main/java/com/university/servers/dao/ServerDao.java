package com.university.servers.dao;

import com.university.servers.model.Server;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by eugen on 12/6/17.
 */
public interface ServerDao extends CrudRepository<Server, Integer> {
}
