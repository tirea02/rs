package com.net.common.rs.services;

import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JpaCacheService {

    private final EntityManager entityManager;

    @Autowired
    public JpaCacheService(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    public void clearJpaCache() {
        entityManager.getEntityManagerFactory().getCache().evictAll();
    }
}
